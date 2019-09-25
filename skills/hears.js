const yangPolicies = require('yang-policies');

module.exports = function(controller) {
  controller.hears("policy", ["ambient"], (bot, message) => {
	const embed = new controller.RichEmbed();
	const policy = yangPolicies[Math.floor(Math.random() * yangPolicies.count)];

	embed.setTitle(policy.title);
	embed.setURL(policy.url);
	embed.setAuthor(
		"Andrew Yang - Yang2020.com",
		"https://www.yang2020.com/wp-content/uploads/yang_white.png",
		"https://yang2020.com"
	);
	embed.setThumbnail("https://www.yang2020.com/wp-content/uploads/yang_white.png")
	embed.setFooter("It’s not left or right it’s forward");
	embed.setColor(5011448);
	embed.setDescription(policy.description);
    bot.reply(message, embed);
  });
}; 
