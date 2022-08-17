import { Page } from 'puppeteer';
import parseElementText from '../common/parseElementText';
import { RAM } from '../../../types';
import getParsingElement from '../common/getParsingElement';
import parseElementInnerHTML from '../common/parseElementInnerHTML';
import camelize from '../common/camelize';
import { xPathSelectors } from '../common/constants';
import parseColorDivs from '../common/parseColorDivs';
import cleanSimpleTable from '../common/cleanSimpleTable';

const parseRAM = async (productId: string, page: Page): Promise<RAM | null> => {
  const name = await parseElementText('.op1-tt', page);

  const mainImageContainer = await getParsingElement('.img200', page);
  const mainImage = await page.evaluate(
    (el) => el.lastElementChild.getAttribute('srcset').split(' ')[0],
    mainImageContainer,
  );

  const description = await parseElementInnerHTML('.conf-desc-ai-title', page);

  const specsTable = await getParsingElement('#help_table', page);

  const rawSpecsTable = await page.evaluate(async (node) => {
    async function getNodeTreeText(inputNode: any): Promise<any> {
      if (inputNode && inputNode.hasChildNodes()) {
        return node.innerText;
      }

      return null;
    }

    return getNodeTreeText(node);
  }, specsTable);

  if (!name || !mainImage || !rawSpecsTable) return null;

  const cleanedSpecsTable = cleanSimpleTable(rawSpecsTable);

  const specs: Record<string, string> = {};

  cleanedSpecsTable.forEach((item: string) => {
    const [name, value] = item.split('\t');

    if (!name && !value) {
      return;
    }

    const camelName = camelize(name);

    specs[camelName] = value;
  });

  const colourArray = await parseColorDivs(xPathSelectors.ramColourDivs, page);

  if (colourArray !== []) specs.colour = colourArray.join();

  return {
    id: productId,
    name,
    mainImage,
    description: description || undefined,
    colour: specs?.colour,
    capacity: specs?.memoryCapacity,
    modules: specs?.memoryModules,
    formFactor: specs?.formFactor,
    type: specs?.type,
    speed: specs?.memorySpeed,
    clockSpeed: specs?.clockSpeed,
    timing: specs?.memoryTiming,
    voltage: specs?.voltage,
    cooling: specs?.cooling,
    moduleProfile: specs?.moduleProfile,
    moduleHeight: specs?.moduleHeight,
  };
};

export default parseRAM;
