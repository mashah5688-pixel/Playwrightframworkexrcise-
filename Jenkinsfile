
stage('Environment Diagnostics') {
    steps {
        bat 'whoami'
        bat 'node --version'
        bat 'npm --version'
        bat 'npx playwright --version'

        bat 'echo CI=%CI%'
        bat 'echo USERPROFILE=%USERPROFILE%'
        bat 'echo LOCALAPPDATA=%LOCALAPPDATA%'

        bat 'if exist .env (echo ENV file exists) else (echo ENV file missing)'

        bat 'if exist "%LOCALAPPDATA%\\ms-playwright" (echo Browser cache exists) else (echo Browser cache missing)'

        bat '''
        powershell -NoProfile -Command "
        try {
            $r = Invoke-WebRequest -Uri 'https://www.snapdeal.com/' -UseBasicParsing -TimeoutSec 30
            Write-Output ('HTTP Status: ' + [int]$r.StatusCode)
        }
        catch {
            Write-Output $_.Exception.Message
            exit 1
        }"
        '''
    }
}
