pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                sshagent(['github-ssh-key']) {
                    // Clone the repository if it doesn't exist
                    sh '''
                    if [ ! -d node-dashboard-demo ]; then
                        git clone git@github.com:hdrick/node-dashboard-demo.git
                    fi
                    cd node-dashboard-demo
                    git fetch --all
                    git checkout main
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
    }
}
