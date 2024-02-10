import './App.css'
import { colors, createTheme, ThemeProvider } from '@mui/material'

// import MuiMasonry from './components/MuiMasonry'
import MuiResponsiveness from './components/MuiResponsiveness'
// import MuiBottomNavigation from './components/MuiBottomNavigation'
// import MuiLoadingButton from './components/MuiLoadingButton'
// import MuiTabs from './components/MuiTabs'
// import MuiTimeline from './components/MuiTimeline'
// import MuiProgress from './components/MuiProgress'
// import MuiSkeleton from './components/MuiSkeleton'
// import MuiDialog from './components/MuiDialog'
// import MuiSnackBar from './components/MuiSnackBar'
// import MuiTable from './components/MuiTable'
// import MuiTooltip from './components/MuiTooltip'
// import MuiAlert from './components/muiAlert'
// import MuiChip from './components/MuiChip'
// import MuiAvatar from './components/MuiAvatar'
// import MuiBadge from './components/MuiBadge'
// import MuiBottomNavigation from './components/MuiBottomNavigation'
// import MuiList from './components/MuiList'
// import MuiSpeedDial from './components/MuiSpeedDial'
// import MuiBreadcrumbs from './components/MuiBreadcrumbs'
// import MuiDrawer from './components/MuiDrawer'
// import MuiLink from './components/MuiLink'
// import MuiNavbar from './components/MuiNavbar'
// import MuiImageList from './components/MuiImageList'
// import MuiCard from './components/MuiCard'
// import MuiLayout from './components/MuiLayout'
// import MuiRating from './components/MuiRating'
// import MuiSwitch from './components/MuiSwitch'
// import MuiRadioButton from './components/MuiRadioButton'
// import { MuiSelect } from './components/MuiSelect'
// import { MuiTypography }from './components/MuiTypography'
// import { MuiTextField }from './components/MuiTextField'
// import { MuiButton } from './components/MuiButton'
// import MuiCheckbox from './components/MuiCheckbox'
// import MuiAutocomplete from './components/MuiAutocomplete'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
        <div className='App'>
          {/* <MuiTypography /> */}
          {/* <MuiTextField /> */}
          {/* <MuiButton /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackBar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
    </ThemeProvider>
  )
}

export default App
