import express, { Request, Response } from "express";

export default ( app : express.Application ) => {

  /**
   * Route for application status check
   */
  app.get('/status', (req: Request, res: Response) => {
    return res.status(200).send("Working!").end()
  })
}