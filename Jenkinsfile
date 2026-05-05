pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/pantojauM/mi_ecommerce.git'
            }
        }

        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
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
}}
