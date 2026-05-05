pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    stages {
        stage('Hola Mundo') {
            steps {
                echo '¡Hola desde Jenkins para la U de Manizales!'[cite: 1]
            }
        }
        stage('Construcción') {
            steps {
                echo 'Simulando construcción...'[cite: 1]
                sh 'npm run build'
            }
        }
        stage('Despliegue') {
            steps {
                echo 'Simulando despliegue...'[cite: 1]
                echo 'Microservicios activos en Docker Desktop'
            }
        }
    }
}
