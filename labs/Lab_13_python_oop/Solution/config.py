from pathlib import PurePath
from datetime import datetime

clientPath = PurePath('../clients.json')
paymentsPath = PurePath('../payments.json')

OUTPUT_FILE_NAME = f'payments_analytics_{datetime.now().strftime('%Y-%m-%d')}.xlsx'