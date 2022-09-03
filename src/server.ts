import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { router } from './routes';
import logging from './shared/config/logging';
import { AppError } from './shared/errors/AppError';

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(router);
  app.use((err: Error, request: Request, response: Response) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  });

  const port = process.env.PORT;

  return app.listen(port, () => {
    logging.info(`Server is running on port ${port}`);
  });
});
