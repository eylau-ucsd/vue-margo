export function search(query) {
    const listings = [
        {
            name: 'Your Lessons Now',
            category: 'Vocal Training',
            description: 'Your Lessons Now (formerly TruVoice Lessons) offers trans voice lessons for those seeking a feminine, masculine, or androgynous voice! '
            + 'Your Lessons Now is a trans-owned business with mostly trans staff members.'
        },
        {
            name: 'Brave Space LLC',
            category: 'Counseling',
            description: 'Information, referrals, and mental health services for transgender children, youth, adults, and their families.'
        }
    ]
    return listings.filter(listing => listing.name.toLowerCase().match(query.toLowerCase()) !== null)
}