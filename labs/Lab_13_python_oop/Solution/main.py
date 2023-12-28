from pathlib import PurePath
import json
from datetime import datetime
from writer import XlsAnalyticPaymentWriter

if __name__ == '__main__':
    clientPath = PurePath('../clients.json')
    paymentsPath = PurePath('../payments.json')

    with open(clientPath, 'r', encoding='utf-8') as f:
        data_clients = json.load(f)
    with open(paymentsPath, 'r', encoding='utf-8') as f:
        data_payments = json.load(f)
    data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}

    output = XlsAnalyticPaymentWriter(data)
    output.write_excel_report(f'payments_analytics_{datetime.now().strftime('%Y-%m-%d')}.xlsx')
