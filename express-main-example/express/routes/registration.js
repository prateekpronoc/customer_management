const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');
const crypto = require('crypto');
async function getAll(req, res) {;
     console.log(models);
	const limit = req.query.pageSize ? +(req.query.pageSize) : 10;
	// const offset = const limit = size ? +size : 3;
	const offset = req.query.page ? req.query.page * limit : 0;
	const customers = await models.goshala_registrations.findAndCountAll({
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
	const user = await models.customers.findByPk(id);
	if (user) {
		let returnObj = {
			status:'success',
			data : user
		}
		res.status(200).json(returnObj);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		req.body.application_uuid = crypto.randomUUID();
		req.body.application_code = (req.body.district).slice(0, 2) + (req.body.mobile_no).slice(-4) + (req.body.block).slice(0, 2);
		req.body.application_code = (req.body.application_code).toUpperCase();
		req.body.application_status= 'Under Observation';
		// console.log();
		// res.status(201).send(req.body);
	const cust = 	await models.goshala_registrations.create(req.body);
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
