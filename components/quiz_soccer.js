import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import axios from 'axios';
import CustomButton from './Custom_Buttom'

const Quiz_Soccer = () => {
  const url = 'https://yazunsport.my.id/api/quizzes/';
  const url2 = 'https://subdomain.grandball.yazunsport.my.id/api/jobsheet/one'
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState('');
  const [nama, setNama] = useState('');
  const [id, setId] = useState('');
  const [pila, setPila] = useState('');
  const [pilb, setPilb] = useState('');
  const [quizFinish, setQuizFinish] = useState(false)

  const updateQuiz = () => {
    setId(quiz[num].id);
    setNama(quiz[num].quiz);
    setPila(quiz[num].a);
    setPilb(quiz[num].b);
  };

  const getAllQuizes = async () => {
    axios.get(url).then((res) => {
      const quizes = res.data.data;
      setQuiz(quizes);
      updateQuiz();
    });
  };

  useEffect(() => {
    getAllQuizes();
  });

  const navigateQuiz = (action) => {
    if (action == 'next') setNum(num + 1);
    else setNum(num - 1);
  };

  // Perintah post quizId adalah dengan id url1, lalu jika answer sama dengan Tombol maka tambah score
  const Score = (pilihan) => {
    fetch(url2, {
      method: 'POST', //or PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizId: id,
        answer: pilihan,
      }),
    })
      .then((response) => {
        return response.json();
        // console.log(response);
      })
      .then((data) => {
        // const data = response.data
        if (data.benar) {
          setScore(score + 1)
        }
        if(num < (quiz.length - 1)){
          navigateQuiz('next')
        }
        else setQuizFinish(true)
    
        // console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 ,backgroundColor: '#FFF5CE'}}>
      <View style={{display: (quizFinish && "none")}}>
        
        <Text style={{ 
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black'}}>
          {nama}
          </Text>

        <CustomButton title={'A. ' + pila} 
        color='rgba(27, 113, 161, 10)' 
        pd={8} 
        margin={5} 
        br={5} onPress={() => Score('a')} />

        <CustomButton title={'A. ' + pilb} 
        color='rgba(27, 113, 161, 10)' 
        pd={8} 
        margin={5} 
        br={5} onPress={() => Score('a')} />

      </View>
      <View style={{display: (!quizFinish && "none")}}>
        <Text style={{ fontSize: 20 }}>Score :{Math.round((score / quiz.length) * 100)}</Text>
        <Button onPress={()=> navigation.navigate('Home')} title="Home" />
      </View>
    </View>
  );
};

export default Quiz_Soccer;