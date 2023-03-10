import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Trending",
            cards: [
                {
                    id: nanoid(),
                    title: "Make Joke Of",
                    link: "https://www.youtube.com/embed/JXc0g4SXSpo"
                },
                {
                    id: nanoid(),
                    title: "Billi Billi",
                    link: "https://www.youtube.com/embed/5bAxTGjcLs4"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Education Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Binocs Show",
                    link: "https://www.youtube.com/embed/OTuph9pJWU4"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Entertainment Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Indian Jugaad",
                    link: "https://www.youtube.com/embed/dI4HG7tGm6U"
                },
                {
                    id: nanoid(),
                    title: "Best Pranks",
                    link: "https://www.youtube.com/embed/eymJ8N1HTGk"
                }
            ]
        },
        {
            id: nanoid(),
            name: "My Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Social Media",
                    link: "https://www.youtube.com/embed/Q4XJK0KTkPE"
                },
                {
                    id: nanoid(),
                    title: "Web App",
                    link: "https://www.youtube.com/embed/n54uiHAhml8"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Music",
            cards: [
                {
                    id: nanoid(),
                    title: "THE LOVE MASHUP",
                    link: "https://www.youtube.com/embed/ZqFCn4Nia4o"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Sports",
            cards: [
                {
                    id: nanoid(),
                    title: "Cricket",
                    link: "https://www.youtube.com/embed/3-6SCbAPEzU"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Gaming",
            cards: [
                {
                    id: nanoid(),
                    title: "Gadgets",
                    link: "https://www.youtube.com/embed/KC0txgqoNOs"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Movies",
            cards: [
                {
                    id: nanoid(),
                    title: "Welcome",
                    link: "https://www.youtube.com/embed/AKiynoClCaA"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Shopping",
            cards: [
                {
                    id: nanoid(),
                    title: "Malls",
                    link: "https://www.youtube.com/embed/VTscLBn920s"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Funny Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Hilarious",
                    link: "https://www.youtube.com/embed/fVoNMdXD3iM"
                }
            ]
        },
    ],
}

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: "new bucket",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "deelele");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer