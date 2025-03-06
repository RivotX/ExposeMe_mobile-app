// import React, { useState, useEffect, useRef } from 'react';
// import { Modal, View, Text, TextInput, TouchableOpacity, Animated, Pressable, Alert } from 'react-native';
// import tw from 'twrnc';
// import { useThemeColor } from '../../hooks/useThemeColor';

// const AddDeleteFriendModal = ({ setModalVisible, modalVisible, OnAccept, selectedUser, action, title, acceptButton, cancelButton }) => {
//   const slideAnim = useRef(new Animated.Value(0)).current;
//   const modal_bg_color = useThemeColor({}, 'modal_bg_color');
//   const modal_text_color = useThemeColor({}, 'modal_text_color');
//   const modal_title_color = useThemeColor({}, 'modal_title_color');
//   const Modal_accept_button = useThemeColor({}, 'Modal_accept_button');
//   const Modal_cancel_button = useThemeColor({}, 'Modal_cancel_button');

//   const [message, setMessage] = useState('');
//   const [charCount, setCharCount] = useState(0);
//   const [error, setError] = useState('');
//   const maxLength = 160;

//   const slideIn = {
//     transform: [
//       {
//         translateY: slideAnim.interpolate({
//           inputRange: [0, 1],
//           outputRange: [300, 0],
//         }),
//       },
//     ],
//   };

//   useEffect(() => {
//     if (modalVisible) {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [modalVisible]);


//   const handleAccept = () => {
//     if (action == 'add') {
//       if (message.length > maxLength) {
//         Alert.alert('Error', 'Message cannot exceed 160 characters.');
//         return;
//       }
//       OnAccept(message);
//     } else if (action == 'delete') {
//       OnAccept();
//     }
//   };

//   const handleChangeText = (text) => {
//     setMessage(text);
//     setCharCount(text.length);
//   };

//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(false);
//       }}
//     >

//       {/* Outside Modal*/}
//       <Pressable
//         style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
//         onPress={() => setModalVisible(false)}
//       >
//         {/* Inside Modal*/}
//         <Animated.View
//           style={[tw`w-11/12 max-w-md bg-${modal_bg_color} rounded-lg shadow-lg p-6`, slideIn]}
//           onStartShouldSetResponder={() => true}
//         >
//           {/* Title */}
//           <Text style={tw`text-2xl font-semibold mb-4 text-${modal_title_color} text-center`}>{title}</Text>

//           {/* Target */}
//           <Text style={tw`text-lg font-semibold mb-4 text-${modal_text_color} text-center`}>@{selectedUser?.name}</Text>

//           {/* Message box */}
//           {action == 'add' && (
//             <>
//               <TextInput
//                 style={tw`w-full bg-gray-200 p-2 rounded-lg mb-2`}
//                 placeholder="Enter your message..."
//                 value={message}
//                 maxLength={maxLength}
//                 onChangeText={handleChangeText}
//               />
//               <Text style={tw`text-right text-${modal_text_color} mb-4`}>{charCount}/{maxLength}</Text>
//             </>
//           )}

//           {/* Buttons */}
//           <View style={tw`flex-row justify-between w-full`}>

//             {/* Cancel button */}
//             <TouchableOpacity
//               style={tw`flex-1 bg-${Modal_cancel_button} p-2 rounded-full mx-1`}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={tw`text-${modal_text_color} font-bold text-center`}>{cancelButton}</Text>
//             </TouchableOpacity>

//             {/* Accept button */}
//             <TouchableOpacity
//               style={tw`flex-1 bg-${Modal_accept_button} p-2 rounded-full mx-1`}
//               onPress={handleAccept}
//             >
//               <Text style={tw`text-white font-bold text-center`}>{acceptButton}</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </Pressable>
//     </Modal >
//   );
// };

// export default AddDeleteFriendModal;