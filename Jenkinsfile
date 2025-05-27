pipeline {
    agent any

    tools {
        nodejs "NodeJS_16" // Adjust to your configured Node.js version
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/your-user/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
