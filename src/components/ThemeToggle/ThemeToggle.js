import './ThemeToggle.css'

const ThemeToggle = ({setTheme, currentTheme}) => (
  <div className="theme-toggle">
    <button
      type="button"
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      {currentTheme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  </div>
)

export default ThemeToggle
