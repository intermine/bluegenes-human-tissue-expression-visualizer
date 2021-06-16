import imjs from 'imjs';
import {
	gTexDataQuery,
	illuminaDataQuery,
	RNASeqQuery,
	queryData
} from '../src/queries';

describe('query', () => {
	const mockData = {
		entity: [1117907, 1144839, 1067416, 1218598, 1205381],
		service: 'https://www.humanmine.org/humanmine'
	};

	test('GTex Data: should return a promise resolving with correct data', () => {
		const promise = queryData({
			query: gTexDataQuery,
			geneId: mockData.entity,
			serviceUrl: mockData.service,
			imjsClient: imjs
		}).catch(() => {});

		expect(promise).resolves.toBeInstanceOf(Array);
		return promise.then(res => {
			expect(res.length).toBeGreaterThanOrEqual(1);
			expect(res[0].rnaSeqResults.length).toBeGreaterThanOrEqual(0);
		});
	});

	test('GTex Data: should return a rejected promise when data not available', () => {
		const promise = queryData({
			query: gTexDataQuery,
			geneId: [1], // invalid gene
			serviceUrl: mockData.service,
			imjsClient: imjs
		});
		return promise.catch(res => expect(res).toBe('No data found!'));
	});

	test('illumina body map: should return a promise resolving with correct data', () => {
		const promise = queryData({
			query: illuminaDataQuery,
			geneId: mockData.entity,
			serviceUrl: mockData.service,
			imjsClient: imjs
		}).catch(() => {});

		expect(promise).resolves.toBeInstanceOf(Array);
		return promise.then(res => {
			expect(res.length).toBeGreaterThanOrEqual(1);
			expect(res[0].atlasExpression.length).toBeGreaterThanOrEqual(0);
		});
	});

	test('illumina body map: should return a rejected promise when data not available', () => {
		const promise = queryData({
			query: illuminaDataQuery,
			geneId: [1], // invalid gene
			serviceUrl: mockData.service,
			imjsClient: imjs
		});
		return promise.catch(res => expect(res).toBe('No data found!'));
	});

	test('RNASeq Data: should return a promise resolving with correct data', () => {
		const promise = queryData({
			query: RNASeqQuery,
			geneId: mockData.entity,
			serviceUrl: mockData.service,
			imjsClient: imjs
		}).catch(() => {});

		expect(promise).resolves.toBeInstanceOf(Array);
		return promise.then(res => {
			expect(res.length).toBeGreaterThanOrEqual(1);
			expect(res[0].rnaSeqResults.length).toBeGreaterThanOrEqual(0);
		});
	});

	test('RNASeq Data: should return a rejected promise when data not available', () => {
		const promise = queryData({
			query: RNASeqQuery,
			geneId: [1], // invalid gene
			serviceUrl: mockData.service,
			imjsClient: imjs
		});
		return promise.catch(res => expect(res).toBe('No data found!'));
	});
});
