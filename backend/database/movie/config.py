#a config file for the Backend keys and tokens and some private variables.

# print(__name__)       #it prints 'config' if we run from the main.py file and '__main__' if ran directly.

if __name__ == 'config':    #to make sure it donot run 'directly' and 'only run' when it is being 'called'.

    mysql_host = "localhost"

    mysql_user = "root"

    mysql_password = "facerecdec4"

    database_name = "moodsync"

    my_email = 'facerecdec@gmail.com'

    email_app_password = 'kycbmvadrbnslydk'

    upload_folder = './match_face/'