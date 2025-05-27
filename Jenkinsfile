pipeline {
    agent any

    tools {
        nodejs "NodeJS_23" // Adjust to match the name of Node.js installation in Jenkins
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Ngll/Playwrite_learning.git'
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
