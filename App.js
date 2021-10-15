import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// export default function App()
const App = () => {
  return (
    // Header

    <ScrollView style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          margin: 10,
          borderRadius: 8,
        }}>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#3DB2FF',
            height: 150,
            margin: 10,
            borderRadius: 8,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="chevron-left" size={30} color="white"></Feather>
              <Entypo name="wallet" size={30} color="white"></Entypo>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>gopay</Text>
            </View>

            <View>
              <Entypo
                name="dots-three-horizontal"
                size={30}
                color="white"></Entypo>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View
              style={
                {
                  // // backgroundColor: 'white',
                  // height: 70,
                  // width: 70,
                  // borderRadius: 35,
                }
              }>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  overflow: 'hidden',
                  borderRadius: 60,
                }}
                source={require('./Avatar.png')}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Ananda Putri FZ
              </Text>
              <Text style={{fontSize: 13, color: 'white'}}>
                Tap to see your Gojek profile
              </Text>
            </View>
          </View>
        </View>

        {/* Icon */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <MaterialComunityIcons
                  name="arrow-up-bold-box"
                  size={30}
                  color="white"></MaterialComunityIcons>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                Pay
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <Entypo name="squared-plus" size={30} color="white"></Entypo>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                Top Up
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <MaterialComunityIcons
                  name="arrow-down-box"
                  size={30}
                  color="white"></MaterialComunityIcons>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                Request
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <Ionicons name="send" size={30} color="white"></Ionicons>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                PayLater
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <FontAwesome5
                  name="hand-holding-usd"
                  size={30}
                  color="white"></FontAwesome5>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                Cash Out
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <MaterialComunityIcons
                  name="wallet-plus"
                  size={30}
                  color="white"></MaterialComunityIcons>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                Plus
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#3DB2FF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View>
                <Ionicons name="receipt" size={30} color="white"></Ionicons>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'black',
                }}>
                GoTagihan
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}></View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: 'white',
            borderColor: 'thistle',
            borderWidth: 4,
            height: 200,
            margin: 10,
            borderRadius: 8,
          }}>
          <View style={{padding: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                GoPay Friends
              </Text>
              <Text style={{fontWeight: 'bold', color: 'green'}}>see more</Text>
            </View>
            <View>
              <Text>These are who lasy sent or requested GoPay</Text>
            </View>
            <View>
              <Text>Tap their name to send again</Text>
            </View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-evenly',
                  // marginRight: 5,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      padding: 10,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Ananda</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Yudha</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Yudhana</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Putri</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Diona</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Amber</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Lisa</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      overflow: 'hidden',
                      borderRadius: 15,
                      marginRight: 15,
                    }}
                    source={require('./Avatar.png')}
                  />
                  <Text>Ima</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>History</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GoPay Top Up Ananda
              </Text>
              <Text style={{fontSize: 16}}>#2093774218741827</Text>
              <Text style={{fontSize: 12}}>13 Okt, 09:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>Rp</Text>
              <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
                51.000
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GoPay Top Up Yudha
              </Text>
              <Text style={{fontSize: 16}}>#2093774218741827</Text>
              <Text style={{fontSize: 12}}>13 Okt, 09:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>Rp</Text>
              <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
                51.000
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GoPay Top Up Yudhana
              </Text>
              <Text style={{fontSize: 16}}>#2093774218741827</Text>
              <Text style={{fontSize: 12}}>13 Okt, 09:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>Rp</Text>
              <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
                51.000
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GoPay Top Up Putri
              </Text>
              <Text style={{fontSize: 16}}>#2093774218741827</Text>
              <Text style={{fontSize: 12}}>13 Okt, 09:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>Rp</Text>
              <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
                51.000
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GoPay Top Up Dhea
              </Text>
              <Text style={{fontSize: 16}}>#2093774218741827</Text>
              <Text style={{fontSize: 12}}>13 Okt, 09:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: 'green'}}>Rp</Text>
              <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
                51.000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
