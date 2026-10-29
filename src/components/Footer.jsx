
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Tahsina Mamun Niha. All rights reserved.</p>
      <p className="footer-small">
        Built with React and Vite.
      </p>
    </footer>
  )
}

const styles = `
  .footer {
    background-color: #15151c;
    border-top: 1px solid #2a2a35;
    padding: 30px 20px;
    text-align: center;
    color: #c8c8d4;
    font-size: 15px;
  }

  .footer p {
    margin: 0;
  }

  .footer-small {
    margin-top: 6px !important;
    font-size: 13px;
    color: #a0a0b0;
  }

  @media (max-width: 480px) {
    .footer {
      padding: 24px 16px;
      font-size: 14px;
    }

    .footer-small {
      font-size: 12px;
    }
  }
`

const styleSheet = document.createElement('style')
styleSheet.textContent = styles

if (!document.querySelector('[data-footer-styles]')) {
  styleSheet.setAttribute('data-footer-styles', 'true')
  document.head.appendChild(styleSheet)
}

export default Footer
