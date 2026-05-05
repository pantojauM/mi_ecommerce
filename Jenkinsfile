pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/pantojauM/mi_ecommerce.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mi-ecommerce .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop mi-ecommerce || true'
                sh 'docker rm mi-ecommerce || true'
                sh 'docker run -d -p 3000:3000 --name mi-ecommerce mi-ecommerce'
            }
        }
    }
}
