class TwitterFeedPage {

    expectedHomePageTitle = "Twitter - What's Happening"
    maxTweetsPerDay = 300
    minRetweetRate = 2.3


    findUsernamesThatStartAndEndWithChars(
        names: string[],
        expectedFirstChar: string,
        expectedLastChar: string
    ): string[] {
        let namesResult: string[] = []

        for (let i = 0; i < names.length; i++) {
            let currentName = names[i]
            let currentFirstChar = currentName.charAt(0)
            let currentLastChar = currentName.charAt(names[i].length - 1)
            if (
                currentFirstChar === expectedFirstChar &&
                currentLastChar === expectedLastChar
            ) {
                namesResult.push(currentName.replace('@', ''))
            }
        }
        return namesResult
    }
}

let newTwitterPage = new TwitterFeedPage()
console.log(
    newTwitterPage.
        findUsernamesThatStartAndEndWithChars(
            ["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"],
            "@",
            "e"
        )
)