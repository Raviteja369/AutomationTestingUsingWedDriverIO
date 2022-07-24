class AMillionMoreModelIntroPage {
	/**
	 * define selectors using getter methods
	 */
	get modelIntroHeader() {
		return $('#ModelIntro-1 section h2');
	}

	get modelIntroHeaderText() {
		return "Ideas that change the world are often the most controversial.";
	}

	get modelIntroParagraph() {
		return $('#ModelIntro-1 section p');
	}

	get modelIntroParagraphText() {
		return "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety.";
	}
}

module.exports = new AMillionMoreModelIntroPage();