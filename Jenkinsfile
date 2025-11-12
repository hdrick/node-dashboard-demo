pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-ssh-key',
                    url: 'git@github.com:your-username/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                // Add build commands
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands
            }
        }
    }
}
