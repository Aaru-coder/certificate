"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          min-height: 100vh;
          background-color: #1a1a1a;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px);
          display: flex;
          flex-direction: column;
          font-family: 'IBM Plex Mono', monospace;
          color: #e8e8e8;
          overflow: hidden;
          position: relative;
        }

        .header {
          background: #111;
          border-bottom: 3px solid #c0392b;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #c0392b;
          box-shadow: 0 0 10px #c0392b;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .header-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: #888;
          text-transform: uppercase;
        }

        .header-title span {
          color: #c0392b;
        }

        .body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          position: relative;
        }

        .big-number {
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(200px, 35vw, 420px);
          color: rgba(255,255,255,0.03);
          line-height: 1;
          user-select: none;
          letter-spacing: -0.02em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }

        .card {
          position: relative;
          z-index: 2;
          border: 1px solid #333;
          border-top: 4px solid #c0392b;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(4px);
          padding: 48px 56px;
          max-width: 620px;
          width: 100%;
          animation: slideUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .error-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: #c0392b;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .error-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #333;
        }

        .error-code {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 10vw, 96px);
          line-height: 1;
          color: #fff;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
        }

        .error-title {
          font-size: 13px;
          font-weight: 500;
          color: #c0392b;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, #333 0%, transparent 100%);
          margin-bottom: 24px;
        }

        .error-message {
          font-size: 13px;
          line-height: 1.8;
          color: #999;
          margin-bottom: 36px;
        }

        .error-message strong {
          color: #ccc;
          font-weight: 500;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 12px 24px;
          cursor: pointer;
          border: none;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #c0392b;
          color: #fff;
        }

        .btn-primary:hover {
          background: #e74c3c;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(192,57,43,0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #888;
          border: 1px solid #333;
        }

        .btn-secondary:hover {
          border-color: #666;
          color: #ccc;
        }

        .countdown {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #222;
          font-size: 11px;
          color: #555;
          letter-spacing: 0.1em;
        }

        .countdown span {
          color: #c0392b;
          font-weight: 500;
        }

        .progress-bar {
          margin-top: 10px;
          height: 2px;
          background: #222;
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #c0392b;
          transition: width 1s linear;
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="header-dot" />
          <span className="header-title">
            System — <span>Error Detected</span>
          </span>
        </header>

        <main className="body">
          <div className="big-number">404</div>

          <div className="card">
            <div className="error-label">HTTP Status 404</div>
            <div className="error-code">404</div>
            <div className="error-title">File or Directory Not Found</div>
            <div className="divider" />
            <p className="error-message">
              The resource you are looking for might have been{" "}
              <strong>removed</strong>, had its <strong>name changed</strong>,
              or is <strong>temporarily unavailable</strong>.
            </p>

            <div className="actions">
              <a href="/" className="btn btn-primary">← Go Home</a>
              <button className="btn btn-secondary" onClick={() => router.back()}>
                Go Back
              </button>
            </div>

            <div className="countdown">
              Redirecting to home in <span>{countdown}s</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(countdown / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}