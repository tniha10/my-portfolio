
function Footer() {
  return (
    <>
      <style>{`
        .footer-editorial {
          background: #f2ebdd;
          color: #123c32;
          padding: 30px 7%;
          border-top: 3px solid #e34234;
        }

        .footer-editorial-container {
          max-width: 1150px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .footer-editorial p {
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .footer-editorial-credit {
          color: #64736a;
        }

        .footer-editorial-credit span {
          color: #e34234;
          font-weight: 700;
        }

        @media (max-width: 600px) {
          .footer-editorial {
            padding: 25px 6%;
          }

          .footer-editorial-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>

      <footer className="footer-editorial">
        <div className="footer-editorial-container">
          <p>
            © 2026 Tahsina Mamun Niha. All rights reserved.
          </p>

          <p className="footer-editorial-credit">
            Designed & developed with <span>React</span> and Vite.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
