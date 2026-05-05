pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    stages {
        stage('Hola Mundo') {
            steps {
                echo '¡Hola desde Jenkins para la U de Manizales!'
            }
        }
        stage('Construcción') {
            steps {
                echo 'Simulando construcción...'
                sh 'npm run build'
            }
        }
        stage('Despliegue') {
            steps {
                echo 'Simulando despliegue...'
                echo 'Microservicios activos en Docker Desktop'
            }
        }
    }
}
