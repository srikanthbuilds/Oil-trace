# Oil-Trace

Oil-Trace is a production-quality frontend prototype for AI-powered oil spill detection and simulated vessel attribution.

> All incidents, vessels, satellite scenes, AIS updates, drift outputs, and attribution scores are synthetic demonstration data. They are not real-world observations or accusations.

## Tech stack

- React 19 and TypeScript
- Vite
- Lucide React
- Recharts
- Custom responsive command-center CSS
- Client-side SVG/SAR visualization with no external map or API dependency

## Local setup

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a Git provider.
2. Import the repository in Vercel.
3. Use the detected Vite framework settings.
4. Build command: `npm run build`
5. Output directory: `dist`

No environment variables, backend, database, API key, or server runtime are required.

## Prototype limitations

- Sentinel-1 scenes are simulated visualizations, not downloaded raster products.
- AIS records and vessel identities are fictional demo data.
- Drift trajectories are interpolated client-side demonstration values, not OpenDrift/OpenOil results.
- Attribution scores are probabilistic demo indicators and not legal evidence.
- The report download is generated plain-text content for demonstration.

## Future architecture

Replace `src/services.ts` mock methods with services for FastAPI, PostgreSQL/PostGIS, PyTorch U-Net inference, Rasterio/GeoPandas, OpenDrift/OpenOil, XGBoost attribution, and MapLibre.

Recommended integration sequence:

1. Replace mock service methods with authenticated API calls.
2. Store scenes, spill polygons, drift points, AIS points, and factor data in PostGIS.
3. Add asynchronous processing and event subscriptions.
4. Replace report text generation with server-rendered or signed PDF reports.
5. Add role-based access, audit logs, evidence provenance, and operational monitoring.
