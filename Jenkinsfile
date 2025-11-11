pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-dashboard-demo"
        CONTAINER_PORT = "3000"
        ACR_LOGIN = "dricksacr01.azurecr.io" // replace with your ACR login server
        ACR_CREDENTIALS = "acr-credentials" // Jenkins credentials ID for ACR
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/node-dashboard-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Login to ACR') {
            steps {
                script {
                    docker.withRegistry("https://${ACR_LOGIN}", "${ACR_CREDENTIALS}") {
                        echo "Logged in to ACR"
                    }
                }
            }
        }

        stage('Push Docker Image to ACR') {
            steps {
                script {
                    docker.withRegistry("https://${ACR_LOGIN}", "${ACR_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}:latest").push()
                        echo "Docker image pushed to ACR"
                    }
                }
            }
        }

        stage('Run Docker Container (Optional)') {
            steps {
                script {
                    // Stop existing container if exists
                    sh 'docker rm -f ${IMAGE_NAME} || true'
                    
                    // Run new container from local image
                    sh "docker run -d -p ${CONTAINER_PORT}:3000 --name ${IMAGE_NAME} ${IMAGE_NAME}:latest"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
