// metabase/token.ts
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

const METABASE_SECRET_KEY = process.env.METABASE_SECRET_KEY;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("dashboard: req.query.dashboard", req.query.dashboard);
  const dashboardId = Number(req.query.dashboard);
  const payload = {
    resource: { dashboard: dashboardId },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
  };
  console.log("payload", payload);
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  res.status(200).json({ token });
}