pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/Snehasathyaa/food-website.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r food-website/* /var/www/html
                '''
            }
        }
    }
}
