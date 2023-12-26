from flask import Flask, jsonify
from flask_cors import CORS
import serial
from time import time
from flask import make_response, json

app = Flask(__name__)
CORS(app)

# Initialize serial connection to Arduino

@app.route('/api/arduino', methods=['GET'])
def arduino():
    try:
        # Open a new serial connection for arduino data
        arduino = serial.Serial("COM3", baudrate=9600)

        # Read arduino data from Arduino
        arduino_data = arduino.readline().decode('utf-8').strip().split(',')
        # Create a response with the arduino data
        data = {
            'message': 'arduino data retrieved successfully',
            'arduino_data': arduino_data,
            'flag': True
        }

        arduino.close()  # Close the serial connection

        return jsonify(data)
    except Exception as e:
        print(e)
        return jsonify({
            'error': f'Error retrieving arduino data: {str(e)}'
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=8080)
