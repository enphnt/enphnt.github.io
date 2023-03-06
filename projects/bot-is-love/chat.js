import * as React from "react";
import "./chat.scss";

const authors = {
  loading: 'bot_is_love is typing',
  nathan: "Nathan",
  bot_is_love: "bot_is_love"
};
const messages = [
  {
    author: authors.loading,
    body: '...',
    timeout: 0
  },
  {
    author: authors.bot_is_love,
    body: "Hey there, ",
    timeout: 3000
  },
  {
    author: authors.bot_is_love,
    body: "I'm bot_is_love. How are you feeling today?",
    timeout: 4000
  },
  {
    author: authors.nathan,
    body: "lol. i'm kidding, it's me, Nathan. But srsly..",
    timeout: 6500
  },
  {
    author: authors.nathan,
    body: 'how are you?',
    timeout: 8500
  },
];

const responses = [
  "I see. Is there anything more that you want to share?",
  "Thanks for sharing what you have chosen to. Is there any specific advice you are seeking?",
  [
    "Ok. Well, this may not directly apply to your situation, but I want to share some perspective that may help.",
    "Some say, 'The grass is always greener on the other side; until you jump the fence and see the weeds up close.' But then others see it as 'The grass is greener where you water it.'"
  ],
  "Does that seem to be helpful?",
  [
    "Either way, I also think..",
    "You know, quality is about the presence of value and not the absence of mistake."
  ],
  "In the midst of our chaotic daily schedules, it is easy to forget to make time for ourselves and each other. Taking the time to connect or recharge is important to prevent burnout and maintain a healthy lifestyle.",
  "You are capable of more than you think. Everything else is just temporary and will pass like the weather.",
  [
    "How does this one make you feel?",
    "Our power to control and influence the present moment is our greatest asset, as it's the only time we have."
  ],
  [
    "You seem brave; ",
    "and I mean bravery as in the courage to be honest with yourself and accept the truth without hesitation.",
  ],
  "This may seem confronting but it's important to remember that coming face-to-face with the truth can invoke fear, as it is a regular response to unfamiliarity.",
  "Appreciating the simple pleasures of life is not just a common saying. In fact, it takes courage to recognize and appreciate them.",
  "All that you truly own are the choices and decisions you make.",
  "That's all the wisdom I can share for now. Now, get back to doing You! 🥳"
];

const Message = props => {
  const { author, body } = props.data;

  let finalBody;

  if (Array.isArray(body)) {
    finalBody = body.map((item, index) => {
      return <a href={item.url} className="c-chat__action" key={index}>{item.text}</a>;
    });
  }
  else {
    finalBody = <div className="c-chat__message">{body}</div>;
  }

  return (
    <li className={"c-chat__item c-chat__item--" + author}>
      <div style={{ color: "white" }}>{author}</div>{finalBody}
    </li>
  );
};

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      responses: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.mockReply = this.mockReply.bind(this);
  }

  componentDidMount() {
    this.demo();
  }

  demo() {

    this.setState({
      messages: [],
      responses: 0
    });

    messages.map((item) =>
      setTimeout(() => this.addMessage(item), item.timeout)
    );


    setTimeout(() => {
      this.setState({
        messages: this.state.messages.slice(1, this.state.messages.length)
      });
    }, 2000);

  }

  scrollToLatestMessage(lastItem) {
    const chatList = document.querySelector('.c-chat__list');

    return chatList ?
      chatList.scrollTop = lastItem.offsetTop + lastItem.style.height
      : null;
  }

  addMessage(item) {
    this.setState({
      messages: [...this.state.messages, item]
    });

    setTimeout(() => {
      const items = document.querySelectorAll('li');
      const lastItem = items[items.length - 1];

      this.scrollToLatestMessage(lastItem);
    }, 100);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.addMessage({
      author: 'You',
      body: e.target.querySelector('input').value
    });

    this.mockReply();

    e.target.reset();

  }

  mockReply() {
    let response;

    if (this.state.responses === 0) {
      response = responses[this.state.responses];
    }
    else {
      if (responses[this.state.responses]) response = responses[this.state.responses];
    }

    if (response) {
      this.setState({
        responses: this.state.responses + 1
      });

      if (Array.isArray(response)) {
        response.map((item, index) =>
          setTimeout(() => this.addMessage({ author: authors.bot_is_love, body: item }), 600 + (2500 * (index + 1)))
        );
      }
      else {
        setTimeout(() => this.addMessage({ author: authors.bot_is_love, body: response }), 3000);
      }
    }
  }

  render() {

    let cssClass = ['c-chat'];

    if (this.state.messages.length === 5) {
      document.querySelector('input').focus();
    }

    return (
      <div className="chat-window">
        <div className="b-chat">
          <div className="b-chat__container">
            <div className={cssClass.join(' ')}>
              <ul className="c-chat__list">
                {this.state.messages.map((message, index) => <Message key={index} data={message} />)}
              </ul>
              <form className="c-chat__form" onSubmit={this.handleSubmit}>
                <input type="text" name="input" placeholder="Type your message here..." autoComplete="off" required />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;