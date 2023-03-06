import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
  <nav>
      <div className='navbar'>
        <div>
            <ul>
                <li>
                    Coins
                </li>
                <li>
                    Exchange
                </li>
                <li>
                    Swap
                </li>
            </ul>
        </div>
        <div className='logo_image'>
            <img src="https://coincap.io/static/logos/black.svg" alt="logo" />
        </div>
        <div>
            <ul>
                <li>USD</li>
                <li>English</li>
                <li>
                <SearchIcon/>
                <SettingsIcon/>
                </li>
                <li>

                </li>

            </ul>
        </div>
    </div>
  </nav>
  )
}
