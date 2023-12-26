#include <OneWire.h>
#include <DallasTemperature.h>
#define levelPower 7
#define levelPin A0
int val = 0;
int sensorInterrupt = 0;   // interrupt 0
int sensorPin = 2;         // Digital Pin 2
const int SENSOR_PIN = 13; // Arduino pin connected to DS18B20 sensor's DQ pin

OneWire oneWire(SENSOR_PIN);            // setup a oneWire instance
DallasTemperature tempSensor(&oneWire); // pass oneWire to DallasTemperature library

float tempCelsius;    // temperature in Celsius
float tempFahrenheit; // temperature in Fahrenheit

unsigned int SetPoint = 400; // 400 milileter

// The hall-effect flow sensor outputs pulses per second per litre/minute of flow./
float calibrationFactor = 90; // You can change according to your datasheet

volatile byte pulseCount = 0;

float flowRate = 0.0;
unsigned int flowMilliLitres = 0;
unsigned long totalMilliLitres = 0;

unsigned long oldTime = 0;

void setup()
{
  pinMode(levelPower, OUTPUT);
  digitalWrite(levelPower, LOW);
  // Initialize a serial connection for reporting values to the host
  Serial.begin(9600);
  pinMode(sensorPin, INPUT);
  digitalWrite(sensorPin, HIGH);
  tempSensor.begin(); // initialize the sensor
  /*The Hall-effect sensor is connected to pin 2 which uses interrupt 0. Configured to trigger on a FALLING state change (transition from HIGH
  (state to LOW state)*/
  attachInterrupt(sensorInterrupt, pulseCounter, FALLING); // you can use Rising or Falling
}

void loop()
{
  int level = readSensor();

  // TEMP SENSOR CODE
  tempSensor.requestTemperatures();            // send the command to get temperatures
  tempCelsius = tempSensor.getTempCByIndex(0); // read temperature in Celsius

  // separator between Celsius and Fahrenheit

  // TEMP SENSOR END
  // FLOW SENSOR CODE
  if ((millis() - oldTime) > 1000) // Only process counters once per second
  {
    // Disable the interrupt while calculating flow rate and sending the value to the host
    detachInterrupt(sensorInterrupt);

    // Because this loop may not complete in exactly 1 second intervals we calculate the number of milliseconds that have passed since the last execution and use that to scale the output. We also apply the calibrationFactor to scale the output based on the number of pulses per second per units of measure (litres/minute in this case) coming from the sensor.
    flowRate = ((1000.0 / (millis() - oldTime)) * pulseCount) / calibrationFactor;

    // Note the time this processing pass was executed. Note that because we've
    // disabled interrupts the millis() function won't actually be incrementing right
    // at this point, but it will still return the value it was set to just before
    // interrupts went away.
    oldTime = millis();

    // Divide the flow rate in litres/minute by 60 to determine how many litres have
    // passed through the sensor in this 1 second interval, then multiply by 1000 to
    // convert to millilitres.
    flowMilliLitres = (flowRate / 60) * 1000;

    // Add the millilitres passed in this second to the cumulative total
    totalMilliLitres += flowMilliLitres;

    unsigned int frac;

    // Print the flow rate for this second in litres / minute

    // Print the cumulative total of litres flowed since starting
 Serial.print(level);
    Serial.print(',');
    Serial.print(flowMilliLitres); // Print the integer part of the variabl
    Serial.print(',');
    Serial.print(tempCelsius); // print the temperature in Celsius
    Serial.println(); // Add a newline character at the end
    // Reset the pulse counter so we can start incrementing again
    pulseCount = 0;

    // Enable the interrupt again now that we've finished sending output
    attachInterrupt(sensorInterrupt, pulseCounter, FALLING);
  }
  // FLOW SENSOR END

  delay(500);
}

// Insterrupt Service Routine

void pulseCounter()
{
  // Increment the pulse counter
  pulseCount++;
}

int readSensor()
{
  digitalWrite(levelPower, HIGH);
  val = analogRead(levelPin);
  digitalWrite(levelPower, LOW);
  return val;
}
