import faker from 'faker'

export const data = Array.from({length: 40}).map((_, idx) => {
    return {
        id: faker.random.uuid(),
        avatar: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        email: faker.internet.email(),
        status: faker.lorem.words(),
        company: faker.company.companyName(),
        position: faker.company.bs(),
        posts: []  
    }
})