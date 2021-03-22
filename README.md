# DoneWithit-ReactNative
Next we'd like to show the user when we're fetching data. Thankfully for us, native components have a scroll indicator built in! This comes in the form of RefreshControl and you can use it with any scrollable component: ScrollView, FlatList or SectionList.
All these scrollable components have a refreshControl props which should be used to pass in or customize the RefreshControl components. Let's import it and add it to our FlatList.
