#a config file for the Backend keys and tokens and some private variables.

# print(__name__)       #it prints 'config' if we run from the main 'twitter bot.py' file and '__main__' if ran directly.

if __name__ == 'config':    #to make sure it donot run 'directly' and 'only run' when it is being 'called'.

    from secrets import token_hex

    mysql_host = "localhost"

    mysql_user = "root"

    mysql_password = "9113160110"

    database_name = "moodsync"

    my_email = 'facerecdec@gmail.com'

    email_app_password = 'kycbmvadrbnslydk'

    upload_folder = './match_face/'

    secret_key = '12345678910111213141516'

    # Youtube Api Key for FaceRecDec
    # AIzaSyD2Fi4FYjvdcGD9fwHhA432WUe1wCOoqHU