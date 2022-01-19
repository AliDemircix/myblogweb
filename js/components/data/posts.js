const posts = [
  {
    id: 'p--1',
    title: 'HTML5 Crash Course',
    content: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard`,
    img: 'img/html.png',
    category: 'html',
    isFeatured: true,
    isPinned: false,
    isNews: false,
    writerId: 'w--1',
    writerAvatar: 'img/energy.png',
    writerName: 'AliD.',
    viewed: 14,
    liked: 10,
  },
  {
    id: 'p--2',
    title: 'CSS with Flex-Box',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente sint architecto tempore dolor fuga cupiditate delectus eveniet ducimus sequi fugit dolore optio et nesciunt earum quos, consequuntur ex soluta.
  Quaerat necessitatibus distinctio ex architecto inventore temporibus cupiditate. Labore quidem dolorem similique blanditiis ipsum, sequi ut quaerat minus illo impedit? Molestiae ex neque pariatur omnis sequi fugiat quas officia soluta?
  Blanditiis iste dolores ullam tenetur quisquam consectetur a repudiandae odio eligendi minus explicabo, est impedit nesciunt fugiat iure, dolore, aspernatur molestiae commodi? Itaque molestiae provident sapiente eaque explicabo maiores architecto!
  Nemo fugit iure fuga, quas esse error? Animi eveniet harum, qui repellat ratione provident obcaecati neque possimus? Dolores sequi nisi voluptates facilis maiores itaque neque nostrum consectetur, consequatur velit nobis.
  Iure eveniet unde, dignissimos consectetur atque a quibusdam possimus sed nobis iusto, suscipit, ducimus autem sit? Recusandae assumenda tempore odit asperiores! Maiores perferendis iusto, quas optio ut dolorem ipsa maxime?`,
    img: 'img/rapidcss.jpg',
    category: 'css',
    isFeatured: false,
    isPinned: true,
    isNews: true,
    writerId: 'w--2',
    writerAvatar: 'img/post4.jpg',
    writerName: 'Rob.',
    viewed: 2,
    liked: 0,
  },
  {
    id: 'p--3',
    title: 'Js Basics with ES6',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente sint architecto tempore dolor fuga cupiditate delectus eveniet ducimus sequi fugit dolore optio et nesciunt earum quos, consequuntur ex soluta.
  Quaerat necessitatibus distinctio ex architecto inventore temporibus cupiditate. Labore quidem dolorem similique blanditiis ipsum, sequi ut quaerat minus illo impedit? Molestiae ex neque pariatur omnis sequi fugiat quas officia soluta?
  Blanditiis iste dolores ullam tenetur quisquam consectetur a repudiandae odio eligendi minus explicabo, est impedit nesciunt fugiat iure, dolore, aspernatur molestiae commodi? Itaque molestiae provident sapiente eaque explicabo maiores architecto!
  Nemo fugit iure fuga, quas esse error? Animi eveniet harum, qui repellat ratione provident obcaecati neque possimus? Dolores sequi nisi voluptates facilis maiores itaque neque nostrum consectetur, consequatur velit nobis.
  Iure eveniet unde, dignissimos consectetur atque a quibusdam possimus sed nobis iusto, suscipit, ducimus autem sit? Recusandae assumenda tempore odit asperiores! Maiores perferendis iusto, quas optio ut dolorem ipsa maxime?`,
    img: 'img/rapidjs.jpg',
    category: 'javascript',
    isFeatured: false,
    isPinned: true,
    isNews: true,
    writerId: 'w--3',
    writerAvatar: 'img/post3.jpg',
    writerName: 'Wouter',
    viewed: 6,
    liked: 1,
  },
  {
    id: 'p--4',
    title: 'React Props',
    content: `Labore lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente sint architecto tempore dolor fuga cupiditate delectus eveniet ducimus sequi fugit dolore optio et nesciunt earum quos, consequuntur ex soluta.
  Quaerat necessitatibus distinctio ex architecto inventore temporibus cupiditate. Labore quidem dolorem similique blanditiis ipsum, sequi ut quaerat minus illo impedit? Molestiae ex neque pariatur omnis sequi fugiat quas officia soluta?
  Blanditiis iste dolores ullam tenetur quisquam consectetur a repudiandae odio eligendi minus explicabo, est impedit nesciunt fugiat iure, dolore, aspernatur molestiae commodi? Itaque molestiae provident sapiente eaque explicabo maiores architecto!
  Nemo fugit iure fuga, quas esse error? Animi eveniet harum, qui repellat ratione provident obcaecati neque possimus? Dolores sequi nisi voluptates facilis maiores itaque neque nostrum consectetur, consequatur velit nobis.
  Iure eveniet unde, dignissimos consectetur atque a quibusdam possimus sed nobis iusto, suscipit, ducimus autem sit? Recusandae assumenda tempore odit asperiores! Maiores perferendis iusto, quas optio ut dolorem ipsa maxime?`,
    img: 'img/rapidreact.jpg',
    isFeatured: false,
    isPinned: false,
    category: 'react',
    isNews: true,
    writerId: 'w--1',
    writerAvatar: 'img/css.jpg',
    writerName: 'Ali D.',
    viewed: 8,
    liked: 3,
  },
  {
    id: 'p--5',
    title: 'Learn Wordpress Tutorial',
    content: `Labore lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente sint architecto tempore dolor fuga cupiditate delectus eveniet ducimus sequi fugit dolore optio et nesciunt earum quos, consequuntur ex soluta.
  Quaerat necessitatibus distinctio ex architecto inventore temporibus cupiditate. Labore quidem dolorem similique blanditiis ipsum, sequi ut quaerat minus illo impedit? Molestiae ex neque pariatur omnis sequi fugiat quas officia soluta?
  Blanditiis iste dolores ullam tenetur quisquam consectetur a repudiandae odio eligendi minus explicabo, est impedit nesciunt fugiat iure, dolore, aspernatur molestiae commodi? Itaque molestiae provident sapiente eaque explicabo maiores architecto!
  Nemo fugit iure fuga, quas esse error? Animi eveniet harum, qui repellat ratione provident obcaecati neque possimus? Dolores sequi nisi voluptates facilis maiores itaque neque nostrum consectetur, consequatur velit nobis.
  Iure eveniet unde, dignissimos consectetur atque a quibusdam possimus sed nobis iusto, suscipit, ducimus autem sit? Recusandae assumenda tempore odit asperiores! Maiores perferendis iusto, quas optio ut dolorem ipsa maxime?`,
    img: 'img/wp.jpg',
    category: 'html',
    isFeatured: false,
    isPinned: false,
    isNews: true,
    writerId: 'w--5',
    writerAvatar: 'img/js.jpg',
    writerName: ' Eric',
    viewed: 14,
    liked: 2,
  },
];
export default posts;
