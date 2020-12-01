#! /bin/bash
### SCOX RPM Pakcages Start Script

echo " ***** Starting the SCOX RPM packages in sequence order ***** "
echo " ***** Starting RPM: "scoxsignal service" ***** "
echo $USER | sudo -S systemctl restart scoxsignal.service

echo " ***** Starting GSPOSEmulator ***** "
cd /home/scot/GSPosEmulator
xterm -e ./pos.bat &
sleep 3

echo " ***** Starting RPM: "Configuration service" ***** "
echo $USER | sudo -S systemctl restart jarvis-config-service.service
sleep 2

#echo "**** Starting PipeserverJS service manually"
#cd /home/scot/Dev/pipeserverjs
#xterm -e "node pipeserver >> pipeserver.log" &

echo $USER | sudo -S systemctl restart pipeserverjs
sleep 3

echo " ***** Starting scoxtb7 service manually ***** "
#cd /home/scot/Dev/scoxtb
#xterm -e "node ./dist/main.js >> scoxtb.log" &
echo $USER | sudo -S systemctl restart scoxtb7
sleep 2

#cd /home/scot/Dev/retail-desktop-pos/apps/sco
#xterm -e "serve -s build" &
#sleep 5

#echo " ***** Starting SCOXUI service manually ***** "
#xterm -e /usr/bin/google-chrome-stable %U --kiosk http://localhost:5000 &
#xterm -e /usr/bin/google-chrome-stable %U http://localhost:5000 &
#sleep 5

echo " ***** Starting RPM: "scoxintervention service" ***** "
echo $USER | sudo -S systemctl restart scoxintervention
sleep 2

#cd /home/scot/Dev/scoxintervention
#xterm -e "go run main.go >> intervention.log" &


echo " ***** Starting RPM: "deviceServerCTM service" ***** "
echo $USER | sudo -S systemctl restart deviceServerCTM.service 
sleep 2

#echo " ***** Starting device emulator manually ***** "
#cd /usr/local/ncr_scot/deviceemulators/UI
#./startUI.sh &
#cd /usr/local/ncr_scot/deviceemulators/reqjars/UI/
#./startUI.sh &
#sleep 2

echo " ***** Starting RPM: "scoxcashservice" ***** "
echo $USER | sudo -S systemctl restart scoxcashservice
sleep 1

echo " ***** Starting RPM: "scoxcashdelegate service" ***** "
echo $USER | sudo -S systemctl restart scoxcashdelegate
sleep 1
#cd /home/scot/Downloads/builds
#xterm -e "./scoxcashdelegate >> cashdelegate.log" &
#sleep 2

echo " ***** Starting RPM: "scoxerrorlookup service" ***** "
echo $USER | sudo -S systemctl restart scoxerrorlookup
sleep 1
echo " ***** Starting RPM: "scoxinputsequencer service" ***** "
echo $USER | sudo -S systemctl restart scoxinputsequencer
sleep 1
echo " ***** Starting RPM: "scoxauthentication service" ***** "
echo $USER | sudo -S systemctl restart scoxauthentication
sleep 1


echo "***** Making DeviceServerCTM : application.properties file to have write permissions ***** "
sudo chmod 777 /usr/local/ncr_scot/deviceServerCTM/application.properties

echo "***** Adding the DeviceEmulator dependencies to application.properties file of DeviceServerCTM ***** "
echo "EnableDeviceDiscovery=false" >> /usr/local/ncr_scot/deviceServerCTM/application.properties
echo "CoinAcceptorProfile=CoinAcceptorProfile" >> /usr/local/ncr_scot/deviceServerCTM/application.properties
echo "CashAcceptorProfile=CashAcceptorProfile" >> /usr/local/ncr_scot/deviceServerCTM/application.properties
echo "CashChangerProfile=CashChangerProfile" >> /usr/local/ncr_scot/deviceServerCTM/application.properties
echo "ScannerProfile=Scanner.7879USB" >> /usr/local/ncr_scot/deviceServerCTM/application.properties

echo "***** Restarting DeviceServerCTM after adding the required dependencies for DeviceEmulator ***** "
sudo systemctl restart deviceServerCTM
sleep 5

echo "**** Starting DeviceEmulator service manually"
cd /usr/local/ncr_scot/deviceemulators/reqjars/UI
xterm -e ./startUI.sh &

echo " ***** Starting scoxcoreservice manually ***** "
#cd /usr/local/ncr_scot/scoxcoreservice
# xterm -e "./scoxcore >> scoxcore.log" &
echo $USER | sudo -S systemctl restart scoxcoreservice &

#cd /home/scot/Dev/scoxcore
#xterm -e "node ./dist/main.js >> scoxcore.log" &

echo " ***** Google Chrome new SCOXUI service manually ***** "
#cd /usr/local/ncr_scot/scoxui
#"./apps/sco/out/ncr-sco-linux-x64/ncr-sco" &
cd /home/scot/Dev/marvinc/retail-desktop-pos/apps/sco
npm start
sleep 10





