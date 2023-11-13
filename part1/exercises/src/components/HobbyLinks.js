export default function HobbyLinks () {
    let hobbyLinks = ['https://magic.wizards.com/en', 'https://hearthstone.blizzard.com/en-us'];
    return (
    <div>
        <a href = {hobbyLinks[0]}>Magic the Gathering</a>
        <a href = {hobbyLinks[1]}>Hearthstone</a>
    </div>
    )
 }