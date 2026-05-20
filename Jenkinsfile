pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
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

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t mi-ecommerce .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker stop mi-ecommerce || true'
                sh 'docker rm mi-ecommerce || true'
                sh 'docker run -d -p 4000:3000 --name mi-ecommerce mi-ecommerce'
            }
        }
    }
}