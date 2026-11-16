
pipeline {
    agent any

    environment {
        CI = 'true'
    }

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Chromium') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Environment Diagnostics') {
            steps {
                echo '===== WINDOWS USER ====='
                bat 'whoami'

                echo '===== NODE VERSION ====='
                bat 'node --version'

                echo '===== NPM VERSION ====='
                bat 'npm --version'

                echo '===== PLAYWRIGHT VERSION ====='
                bat 'npx playwright --version'

                echo '===== ENVIRONMENT ====='
                bat 'echo CI=%CI%'
                bat 'echo USERPROFILE=%USERPROFILE%'
                bat 'echo LOCALAPPDATA=%LOCALAPPDATA%'

                echo '===== ENV FILE ====='
                bat 'if exist .env (echo ENV file exists) else (echo ENV file missing)'

                echo '===== BROWSER CACHE ====='
                bat 'if exist "%LOCALAPPDATA%\\ms-playwright" (echo Browser cache exists) else (echo Browser cache missing)'

                echo '===== SNAPDEAL NETWORK ====='
                powershell '''
                    try {
                        $r = Invoke-WebRequest -Uri "https://www.snapdeal.com/" -UseBasicParsing -TimeoutSec 30
                        Write-Output "HTTP Status: $([int]$r.StatusCode)"
                    }
                    catch {
                        Write-Output $_.Exception.Message
                        exit 1
                    }
                '''
            }
        }

        stage('Execute Tests') {
            steps {
                bat 'npx playwright test --config=playwright.config.ts --workers=1 --timeout=60000'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**/*, allure-results/**/*',
                allowEmptyArchive: true
        }
    }
}
