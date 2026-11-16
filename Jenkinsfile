
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

        stage('Execute Tests') {
            steps {
                bat 'npx playwright test --workers=1'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts:
                'test-results/**/*, allure-results/**/*',
                allowEmptyArchive: true
        }
    }
}
