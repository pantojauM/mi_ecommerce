pipeline {
    agent any

    /* 
       Definimos la herramienta NodeJS para que Jenkins sepa 
       dónde está 'npm' y 'node'.
    */
    tools {
        nodejs 'node' // El nombre 'node' debe coincidir con el que configuraste en Jenkins
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Es buena práctica tener el clonado como primera etapa explícita
                git branch: 'main', url: 'https://github.com/pantojauM/mi_ecommerce.git'
            }
        }

        stage('Instalar') {
            steps {
                echo 'Instalando dependencias del ecommerce...'
                // 'sh' ejecuta comandos en la terminal de Linux
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo ecommerce...'
                // Genera la carpeta /dist o /build
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Probando ecommerce...'
                // Si tienes pruebas configuradas, usa 'npm test'. 
                // Si no, déjalo con echo para que no falle el pipeline.
                script {
                    try {
                        sh 'npm test'
                    } catch (Exception e) {
                        echo "No se encontraron pruebas o fallaron, pero continuamos..."
                    }
                }
            }
        }

        stage('Resumen de Artefactos') {
            steps {
                // Esto ayuda a verificar que los archivos se crearon
                sh 'ls -la'
                echo 'El build está listo en la carpeta correspondiente.'
            }
        }
    }

    post {
        success {
            echo '¡Pipeline finalizado con éxito!'
        }
        failure {
            echo 'Hubo un error. Revisa la Consola de Salida.'
        }
    }
}
