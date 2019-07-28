import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, { Component } from "react";

// all available props
const theme = {
  background: '#F5FFFA',
  fontFamily: 'Garamond',
  headerBgColor: '#32CD32',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#32CD32',
  botFontColor: '#fff',
  userBubbleColor: '#98FB98',
  userFontColor: '#4a4a4a',
};

const toggleFloating = ({opened}) => {
  if({opened}) {
    speechSynthesis = {enable: true, lang:'en'}
  }
  else if (!{opened}) {
    speechSynthesis = {enable: false, lang: 'en'}
  }
}

function ChatComponent() {

  return(
  
  <ThemeProvider theme={theme}>
  
  <ChatBot
  floating={true}
  opened={false}
  recognitionEnable={true}
  speechSynthesis = {{enable:toggleFloating, lang:'en'}}
  headerTitle="Recipe Tips with Chai!"
  botAvatar="https://image.shutterstock.com/image-vector/cute-smiling-funny-robot-chat-600w-757177696.jpg"
  userAvatar="https://image.shutterstock.com/image-vector/illustration-long-shadow-icon-avatar-600w-227664952.jpg"

  steps={[
    {
      id: '1',
      message: "Well hello there, my name is Chai! I am your friendly chatty chatbot! Welcome to RECIPE RECITE! What is your name?",
      trigger: '2',
    },

    {
      id: '2',
      user: true,
      trigger: '3',
    },

    {
      id: '3',
      message: "Hi {previousValue}, it's a pleasure to meet you! Do you care to hear about some of the recipe tips I have to offer?",
      trigger: '4'
    },

    {
      id: '4',
      user: true,
      validator: (value) => {
        if (/y(?:es)?|1/i.test(value)) {
          console.log('contains yes regex')
          return true;
        }
        if (/n(?:o)?|2/i.test(value)) {
          console.log('contains no regex')
          return 'Thank you for visiting! Please do come again!'
        }
        if(!(/n(?:o)?|2/i.test(value))) {
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
        if(!(/y(?:es)?|1/i.test(value))){
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
        // if (value === ('no'||'NO'||'No'||'Nope'||'NOPE'||'nope'||'NO THANK YOU'||'no thank you'||'No thank you'||'No Thank You'||'n'||'N'))  {
        //   return 'Thank you for visiting! Please do come again!';
        // }
        // if (value === !('no'||'NO'||'No'||'Nope'||'NOPE'||'nope'||'NO THANK YOU'||'no thank you'||'No thank you'||'No Thank You'||'n'||'N'||'yes'||'YES'||'Yes'||'Yep'||'YEP'||'yep'||'YES THANK YOU'||'yes thank you'||'Yes thank you'||'Yes Thank You'||'y'||'Y')) {
        //   return 'Please say either yes or no as a valid answer';
        // }
        // if (value === ('yes'||'YES'||'Yes'||'Yep'||'YEP'||'yep'||'YES THANK YOU'||'yes thank you'||'Yes thank you'||'Yes Thank You'||'y'||'Y'))
        // return true;
        // var value1 = ['yes','YES','Yes','Yep','YEP','yep','YES THANK YOU','yes thank you','Yes thank you','Yes Thank You','y','Y'];
        // for (var i = 0; i<value1.length; i++);
        // if (value1 = true) {
        //   console.log("yes")
        //   return true;
        // }
        // var value2 = ['no','NO','No','Nope','NOPE','nope','NO THANK YOU','no thank you','No thank you','No Thank You','n','N'];
        // for (var j = 0; j<value2.length; j++);
        // if(value2 = true) {
        //   console.log("no")
        //   return 'Thank you for visiting! Please do come again!'
        // }
        //  var value3 = ['no','NO','No','Nope','NOPE','nope','NO THANK YOU','no thank you','No thank you','No Thank You','n','N','yes','YES','Yes','Yep','YEP','yep','YES THANK YOU','yes thank you','Yes thank you','Yes Thank You','y','Y'].indexOf(value)
        //  for (var k = 0; k<value3.length; k++);
        //  if(value3 = false) {
        //    console.log("neither yes nor no")
        //    return 'Invalid choice please enter yes or no'
        //  }
      },   
      trigger: '5',
    },
   
    {
      id: '5',
      message: "Did you know that if your food tends to taste bland, it most likely only requires a little more salt, as opposed to more ingredients? The key to flavourful food is to season with salt every step of the cooking process including at the end - but always remember still that a little goes a long way! How about another?",
      trigger: '6',
    },

    {
    id: '6',
      user: true,
      validator: (value) => {
        if (/y(?:es)?|1/i.test(value)) {
          console.log('contains yes regex')
          return true;
        }
        if (/n(?:o)?|2/i.test(value)) {
          console.log('contains no regex')
          return 'Thank you for visiting! Please do come again!'
        }
        if(!(/n(?:o)?|2/i.test(value))) {
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
        if(!(/y(?:es)?|1/i.test(value))){
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
      },
      trigger: '7',
    },

    {
      id: '7',
      message: "Did you know that sugar enhances the flavors of savory foods such as roasted carrots, beets, and tomatoes. It plays an important role in balancing flavors! Say 'next' for another savoury tip!",
      trigger: '8',
    },

    {
    id: '8',
    user: true,
    validator: (value) => {
      if (/next/i.test(value)) {
        console.log('contains next regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/next/i.test(value))) {
        console.log("Not next")
        return 'Please say either next or no as a valid answer'
      }
      if(!(/n(?:o)?|2/i.test(value))){
        console.log("Not no")
        return 'Please say either next or no as a valid answer'
      }
    },
    trigger: '9',
    },

  {
    id: '9',
    message: "Do you ever wonder how restaurants get their sauces so shiny and rich? It's because they finish them with a few pats of cold butter (aka monter au beurre) before serving them. Next time you're making a sauce, try adding a few pats of cold butter at the very end to add richness and shine. I say on to the next, what do you think?",
    trigger: '10',
  },

  {
    id: '10',
    user: true,
    validator: (value) => {
      if (/y(?:es)?|1/i.test(value)) {
        console.log('contains yes regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/n(?:o)?|2/i.test(value))) {
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
      if(!(/y(?:es)?|1/i.test(value))){
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
  },
  trigger: '11',
},

  {
    id: '11',
    message: "Completely dry your meats before cooking them. Whether it's roasted chicken or seared scallops, drying them ensures you'll get a crisp, golden skin that won't stick to the pan. Pat them dry with paper towels or let them air-dry in the cooler for a few hours before cooking them. I have more, should I keep going?",
    trigger: '12',
  },

  {
    id: '12',
    user: true,
    validator: (value) => {
      if (/y(?:es)?|1/i.test(value)) {
        console.log('contains yes regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/n(?:o)?|2/i.test(value))) {
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
      if(!(/y(?:es)?|1/i.test(value))){
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
    },
    trigger: '13',
  },

  {
    id: '13',
    message: "For maximum flavor, toast your nuts and spices. Toasting nuts and spices brings out their flavors and takes your cooking to a whole new level! If you've had enough just say no, otherwise I can share some more!",
    trigger: '14',
  },

  {
    id: '14',
    user: true,
    validator: (value) => {
      if (/y(?:es)?|1/i.test(value)) {
        console.log('contains yes regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/n(?:o)?|2/i.test(value))) {
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
      if(!(/y(?:es)?|1/i.test(value))){
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
    },
    trigger: '15',
  },

  {
    id: '15',
    message: "If your food tastes flat, add a touch of acid. Acid makes your food come to life. A squeeze of lemon juice or a dash of vinegar cuts through fat, brightens flavors, and wakes up flat dishes. Just like salt and sugar, acid balances flavours and makes food shine! Say yes to keep going!",
    trigger: '16',
  },

  {
    id: '16',
    user: true,
    validator: (value) => {
      if (/y(?:es)?|1/i.test(value)) {
        console.log('contains yes regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/n(?:o)?|2/i.test(value))) {
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
      if(!(/y(?:es)?|1/i.test(value))){
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
    },
    trigger: '17',
  },

  {
    id: '17',
    message: "When cooking for a crowd, keep it simple. If you plan on having family over for dinner, don't cook several courses - instead focus on making one thing and make it great! I hope you are liking these tips so far! You know what to do if you want to hear more!",
    trigger: '18',
  },

  {
  id: '18',
    user: true,
    validator: (value) => {
      if (/y(?:es)?|1/i.test(value)) {
        console.log('contains yes regex')
        return true;
      }
      if (/n(?:o)?|2/i.test(value)) {
        console.log('contains no regex')
        return 'Thank you for visiting! Please do come again!'
      }
      if(!(/n(?:o)?|2/i.test(value))) {
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
      if(!(/y(?:es)?|1/i.test(value))){
        console.log("Not no")
        return 'Please say either yes or no as a valid answer'
      }
    },
    trigger: '19',
  },

  {
    id: '19',
    message: "Cook your pasta until it's almost done, then transfer it to your sauce to finish cooking. The pasta will absorb a ton of flavour and cling to the sauce better. If the sauce is too thick, add some reserved pasta water to thin it out and give it a beautifully glossy shine! I still have a few more tips up my sleeve if you care to hear!",
    trigger: '20',
  },

  {
    id: '20',
      user: true,
      validator: (value) => {
        if (/y(?:es)?|1/i.test(value)) {
          console.log('contains yes regex')
          return true;
        }
        if (/n(?:o)?|2/i.test(value)) {
          console.log('contains no regex')
          return 'Thank you for visiting! Please do come again!'
        }
        if(!(/n(?:o)?|2/i.test(value))) {
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
        if(!(/y(?:es)?|1/i.test(value))){
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
      },
      trigger: '21',
    },

    {
      id: '21',
      message: "If you want perfect eggs, you need to cook them over low heat and never get the pan hot enough to brown them. This will prevent them from getting tough and result in perfect, emoji-like eggs! I have much more, you know what to do, say yes for another!",
      trigger: '22',
    },

    {
    id: '22',
      user: true,
      validator: (value) => {
        if (/y(?:es)?|1/i.test(value)) {
          console.log('contains yes regex')
          return true;
        }
        if (/n(?:o)?|2/i.test(value)) {
          console.log('contains no regex')
          return 'Thank you for visiting! Please do come again!'
        }
        if(!(/n(?:o)?|2/i.test(value))) {
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
        if(!(/y(?:es)?|1/i.test(value))){
          console.log("Not no")
          return 'Please say either yes or no as a valid answer'
        }
      },
      trigger: '23',
    },

      {
        id: '23',
        message: "For perfectly juicy meat, brine it! (Brining is just a fancy word for soaking meat in salt water). Brining makes them juicy, succulet and bursting! Shall we keep going?",
        trigger: '24',
      },

      {
        id: '24',
          user: true,
          validator: (value) => {
            if (/y(?:es)?|1/i.test(value)) {
              console.log('contains yes regex')
              return true;
            }
            if (/n(?:o)?|2/i.test(value)) {
              console.log('contains no regex')
              return 'Thank you for visiting! Please do come again!'
            }
            if(!(/n(?:o)?|2/i.test(value))) {
              console.log("Not no")
              return 'Please say either yes or no as a valid answer'
            }
            if(!(/y(?:es)?|1/i.test(value))){
              console.log("Not no")
              return 'Please say either yes or no as a valid answer'
            }
          },
          trigger: '25',
        },

        {
          id: '25',
          message: "Don't crowd the pan! Whether you're baking or pan frying, it's important to avoid crowding the pan. Similalry to when vegetables or proteins are cooked while moist, when they're crammed into a pan they'll steam instead of brown, which is never good. Shall we keep going?",
          trigger: '26',
        },
  
        {
          id: '26',
            user: true,
            validator: (value) => {
              if (/y(?:es)?|1/i.test(value)) {
                console.log('contains yes regex')
                return true;
              }
              if (/n(?:o)?|2/i.test(value)) {
                console.log('contains no regex')
                return 'Thank you for visiting! Please do come again!'
              }
              if(!(/n(?:o)?|2/i.test(value))) {
                console.log("Not no")
                return 'Please say either yes or no as a valid answer'
              }
              if(!(/y(?:es)?|1/i.test(value))){
                console.log("Not no")
                return 'Please say either yes or no as a valid answer'
              }
            },
            trigger: '27',
          },

          {
            id: '27',
            message: "Be patient and stop poking your meat! Keep your heat high, flip it once, and stop poking it. When the meat is done, it will release itself - no scraping with a spatula needed! You know to do, say the magic word to be blessed with more tips and tricks!",
            trigger: '28',
          },

          {
            id: '28',
              user: true,
              validator: (value) => {
                if (/y(?:es)?|1/i.test(value)) {
                  console.log('contains yes regex')
                  return true;
                }
                if (/n(?:o)?|2/i.test(value)) {
                  console.log('contains no regex')
                  return 'Thank you for visiting! Please do come again!'
                }
                if(!(/n(?:o)?|2/i.test(value))) {
                  console.log("Not no")
                  return 'Please say either yes or no as a valid answer'
                }
                if(!(/y(?:es)?|1/i.test(value))){
                  console.log("Not no")
                  return 'Please say either yes or no as a valid answer'
                }
              },
              trigger: '29',
            },

            {
              id: '29',
              message: "Resting meat after cooking it allows the juices to redistribute throughout so you won't lose a ton of moisture when cutting into it. Yes is the magic word for a few more tips!",
              trigger: '30',
            },

            {
              id: '30',
                user: true,
                validator: (value) => {
                  if (/y(?:es)?|1/i.test(value)) {
                    console.log('contains yes regex')
                    return true;
                  }
                  if (/n(?:o)?|2/i.test(value)) {
                    console.log('contains no regex')
                    return 'Thank you for visiting! Please do come again!'
                  }
                  if(!(/n(?:o)?|2/i.test(value))) {
                    console.log("Not no")
                    return 'Please say either yes or no as a valid answer'
                  }
                  if(!(/y(?:es)?|1/i.test(value))){
                    console.log("Not no")
                    return 'Please say either yes or no as a valid answer'
                  }
                },
                trigger: '31',
              },

              {
                id: '31',
                message: "Before you start cooking for the day, hone — or realign — your knife. It won't sharpen it, but it will keep the edge aligned and prevent it from becoming warped. Just a few more to go, yes is the magic word!",
                trigger: '32',
              },

              {
                id: '32',
                  user: true,
                  validator: (value) => {
                    if (/y(?:es)?|1/i.test(value)) {
                      console.log('contains yes regex')
                      return true;
                    }
                    if (/n(?:o)?|2/i.test(value)) {
                      console.log('contains no regex')
                      return 'Thank you for visiting! Please do come again!'
                    }
                    if(!(/n(?:o)?|2/i.test(value))) {
                      console.log("Not no")
                      return 'Please say either yes or no as a valid answer'
                    }
                    if(!(/y(?:es)?|1/i.test(value))){
                      console.log("Not no")
                      return 'Please say either yes or no as a valid answer'
                    }
                  },
                  trigger: '33',
                },
  
                {
                  id: '33',
                  message: "Always have a side towel handy. Side towels are the currency of culinary school. Keeping one near your stove will allow you to work smoothly, prevent burns, and save you time.",
                  trigger: '34',
                },

                {
                  id: '34',
                  message: "I am afraid I have reached the end! A very special thank you to Jesse Szewczyk for his wonderful culinary tips!. Thank you for listening! ",
                  end: true,
                },
  ]}
/>

  </ThemeProvider>
)
};

 
export default ChatComponent;