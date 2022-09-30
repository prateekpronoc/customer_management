const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');
const crypto = require('crypto');
async function getAll(req, res) {;
    console.log(models);
	const limit = req.query.pageSize ? +(req.query.pageSize) : 10;
	// const offset = const limit = size ? +size : 3;
	const offset = req.query.page ? req.query.page * limit : 0;
	const customers = await models.catalog_values.findAndCountAll({
		limit,
  offset
	}
	);
	console.log(customers);
	const returnObj = {
		count: customers.count,
		next: offset+1,
		previous: offset-1,
		results : customers.rows
	};
	res.status(200).json(returnObj);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const user = await models.user.findByPk(id);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		// req.body.customer_uuid = crypto.randomUUID()
		// console.log();
	const cust = 	await models.catalog_values.create(req.body);
		res.status(201).send(cust);
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.user.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.user.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
