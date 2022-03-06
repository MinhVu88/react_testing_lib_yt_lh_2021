const mockedResponse = {
  data: {
    results: [
      {
        name: { first: 'Maynard', last: 'Keenan' },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: { username: "Möstresticator" }
      }
    ]
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockedResponse)
};