/* add vertical scrolling and limit picture size
    fetch request to back end
*/

/* export default [
    {
        type: 'Stuffed Doggy',
        imageUri: { uri: "https://images-na.ssl-images-amazon.com/images/I/71p9FR2c4ML._AC_SX425_.jpg" },
        heading: 'Dani, age 7',
        description: '$25',
        key: 'first',
        color: '#9dcdfa',
    },
    {
        type: 'Elmo',
        imageUri: { uri: "https://images-na.ssl-images-amazon.com/images/I/81tISKde7HL._AC_SL1500_.jpg" },
        heading: 'Meg, age 4',
        description: '$35',
        key: 'second',
        color: '#db9efa',
    },
    {
        type: 'Blues Clues and You',
        imageUri: { uri: "https://target.scene7.com/is/image/Target/GUEST_0536a564-acaa-48f5-8236-69f7372071d6?wid=488&hei=488&fmt=pjpeg" },
        heading: 'Steve, age 6',
        description:
            '$45',
        key: 'third',
        color: '#999',
    },

]; */
/*

familyName : type
recipientDesc : heading
imageUri
story: description
link
key

*/

export default [
  {
    familyName: 'Shumaker',
    recipientDesc: 'Raven, age 4',
    imageUri: {
      uri:
        'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/portrait-of-young-sad-girl-leblond-catherine.jpg',
    },
    story:
      'Raven loves birds and wants to learn more about them. Raven would love a birdwatching kit.',
    link: 'https://www.amazon.com/hz/wishlist/ls/2AVG4VTPCN6P5?ref_=wl_share',
    key: '1',
  },
  {
    familyName: 'Michel',
    recipientDesc: 'Em, age 5',
    imageUri: {
      uri:
        'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
    },
    story:
      'Em loves dogs and wants to learn more about them. Em would love "All Dogs Go to Heaven".',
    link: 'https://www.amazon.com/hz/wishlist/ls/2AVG4VTPCN6P5?ref_=wl_share',
    key: '2',
  },
  {
    familyName: 'Frakes',
    recipientDesc: 'Steve, age 2',
    imageUri: {
      uri:
        'https://cdn.pixabay.com/photo/2014/04/05/13/05/portrait-317041_960_720.jpg',
    },
    story: 'Steves loves potatoes. Steve would love a vegetable peeler.',
    link: 'https://www.amazon.com/hz/wishlist/ls/2AVG4VTPCN6P5?ref_=wl_share',
    key: '3',
  },
  {
    familyName: 'Chi',
    recipientDesc: 'Lizzy, age 4',
    imageUri: {
      uri:
        'https://cdn.pixabay.com/photo/2016/04/06/13/32/sleeping-1311784_960_720.jpg',
    },
    story: 'Lizzy loves crayons. Lizzy would love a big box of colorful wax.',
    link: 'https://www.amazon.com/hz/wishlist/ls/2AVG4VTPCN6P5?ref_=wl_share',
    key: '4',
  },
];
