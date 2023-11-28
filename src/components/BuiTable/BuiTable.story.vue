<script setup lang="ts">
import BuiTable from './BuiTable.vue'
import BuiTableHeadCell from './BuiTableHeadCell.vue'
import BuiTableRow from './BuiTableRow.vue'
import BuiInput from '../BuiInput/BuiInput.vue'
import BuiButton from '../BuiButton/BuiButton.vue'
import BuiTableCell from './BuiTableCell.vue'
import BuiTableBody from './BuiTableBody.vue'
import BuiTableHead from './BuiTableHead.vue'
import BuiTableFooter from './BuiTableFooter.vue'
import BuiCheckbox from '../BuiCheckbox/BuiCheckbox.vue'
import { ref } from 'vue'

const drain = ref(false)
const etcd = ref(false)
const controlPlace = ref(false)
const worker = ref(false)

function click() {
  console.log('click')
}
</script>

<template>
  <Story title="BuiTable">
    <Variant title="Default" responsive-disabled>
      <div class="p-2">
        <BuiTable>
          <BuiTableHead>
            <BuiTableHeadCell>Name Prefix</BuiTableHeadCell>
            <BuiTableHeadCell>Count</BuiTableHeadCell>
            <BuiTableHeadCell>Drain Before Delete</BuiTableHeadCell>
            <BuiTableHeadCell class="bg-red-100 text-red-300">Etcd</BuiTableHeadCell>
            <BuiTableHeadCell class="bg-green-100 text-green-500">Control Plane</BuiTableHeadCell>
            <BuiTableHeadCell>Worker</BuiTableHeadCell>
            <BuiTableHeadCell>Resources</BuiTableHeadCell>
            <BuiTableHeadCell>Labels</BuiTableHeadCell>
            <BuiTableHeadCell>Delete</BuiTableHeadCell>
          </BuiTableHead>
          <BuiTableBody>
            <BuiTableRow>
              <BuiTableCell>
                <BuiInput label="" placeholder="Name Prefix" />
              </BuiTableCell>
              <BuiTableCell>
                <BuiInput
                  label=""
                  placeholder="Count"
                  type="number"
                  class="appearance-none"
                  disabled
                />
              </BuiTableCell>
              <BuiTableCell>
                <BuiCheckbox v-model="drain" label="" class="justify-center" />
              </BuiTableCell>
              <BuiTableCell>
                <BuiCheckbox v-model="etcd" label="" class="justify-center" />
              </BuiTableCell>
              <BuiTableCell>
                <BuiCheckbox v-model="controlPlace" label="" class="justify-center" />
              </BuiTableCell>
              <BuiTableCell>
                <BuiCheckbox v-model="worker" label="" class="justify-center" />
              </BuiTableCell>
              <BuiTableCell>
                <BuiButton color="icon" classes="text-primary-500 p-4 inline-block" @click="click">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.128 2.35547L10.1354 2.34805L10.1425 2.34031C10.5886 1.85542 11.2004 1.55593 11.8566 1.50095C11.9692 1.49558 12.0818 1.51299 12.1876 1.55215L12.3607 1.08446L12.1876 1.55215C12.2937 1.59146 12.3909 1.65185 12.4731 1.7297L14.2875 3.54497C14.463 3.72055 14.5578 4.03462 14.4629 4.48576C14.3692 4.93123 14.0982 5.44225 13.6569 5.88839C13.6566 5.88862 13.6564 5.88884 13.6562 5.88907L5.85294 13.7159L5.85281 13.7158L5.84326 13.7259C5.67725 13.9019 5.45964 14.0204 5.22202 14.0644L1.78859 14.4987H1.68018H1.66428L1.6484 14.4997C1.62642 14.5011 1.6044 14.4973 1.58417 14.4885C1.56393 14.4797 1.54604 14.4663 1.53198 14.4492C1.51791 14.4322 1.50808 14.412 1.5033 14.3904C1.49852 14.3687 1.49894 14.3463 1.50452 14.3249L1.51247 14.2943L1.51652 14.263L1.96464 10.7959C2.00852 10.5578 2.12707 10.3398 2.30319 10.1735L2.30836 10.1687L2.3134 10.1636L10.128 2.35547ZM5.44786 13.3991L5.47628 13.3778L5.5014 13.3527L11.1974 7.654L11.5507 7.30052L11.1974 6.94705L9.06892 4.81756L8.71528 4.46376L8.36165 4.81756L2.66562 10.5162L2.60258 10.5793L2.56523 10.6602L2.50528 10.7902L2.47338 10.8593L2.46351 10.9348L2.15373 13.3043L2.06963 13.9475L2.71307 13.865L5.13138 13.5551L5.26232 13.5383L5.36791 13.4591L5.44786 13.3991ZM13.3577 5.54255L13.3578 5.54263L13.3654 5.53502C13.7131 5.18819 13.9383 4.7375 14.007 4.25121L14.0419 4.00422L13.8656 3.82779L12.1867 2.14819L12.0044 1.96578L11.7501 2.00859C11.2575 2.09152 10.8072 2.33754 10.4713 2.70693L9.42091 3.75781L9.0676 4.11128L9.42091 4.46475L11.5494 6.59425L11.895 6.93999L12.2485 6.6023L13.3577 5.54255Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </BuiButton>
              </BuiTableCell>
              <BuiTableCell>
                <BuiButton color="icon" classes="text-primary-500 p-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.128 2.35547L10.1354 2.34805L10.1425 2.34031C10.5886 1.85542 11.2004 1.55593 11.8566 1.50095C11.9692 1.49558 12.0818 1.51299 12.1876 1.55215L12.3607 1.08446L12.1876 1.55215C12.2937 1.59146 12.3909 1.65185 12.4731 1.7297L14.2875 3.54497C14.463 3.72055 14.5578 4.03462 14.4629 4.48576C14.3692 4.93123 14.0982 5.44225 13.6569 5.88839C13.6566 5.88862 13.6564 5.88884 13.6562 5.88907L5.85294 13.7159L5.85281 13.7158L5.84326 13.7259C5.67725 13.9019 5.45964 14.0204 5.22202 14.0644L1.78859 14.4987H1.68018H1.66428L1.6484 14.4997C1.62642 14.5011 1.6044 14.4973 1.58417 14.4885C1.56393 14.4797 1.54604 14.4663 1.53198 14.4492C1.51791 14.4322 1.50808 14.412 1.5033 14.3904C1.49852 14.3687 1.49894 14.3463 1.50452 14.3249L1.51247 14.2943L1.51652 14.263L1.96464 10.7959C2.00852 10.5578 2.12707 10.3398 2.30319 10.1735L2.30836 10.1687L2.3134 10.1636L10.128 2.35547ZM5.44786 13.3991L5.47628 13.3778L5.5014 13.3527L11.1974 7.654L11.5507 7.30052L11.1974 6.94705L9.06892 4.81756L8.71528 4.46376L8.36165 4.81756L2.66562 10.5162L2.60258 10.5793L2.56523 10.6602L2.50528 10.7902L2.47338 10.8593L2.46351 10.9348L2.15373 13.3043L2.06963 13.9475L2.71307 13.865L5.13138 13.5551L5.26232 13.5383L5.36791 13.4591L5.44786 13.3991ZM13.3577 5.54255L13.3578 5.54263L13.3654 5.53502C13.7131 5.18819 13.9383 4.7375 14.007 4.25121L14.0419 4.00422L13.8656 3.82779L12.1867 2.14819L12.0044 1.96578L11.7501 2.00859C11.2575 2.09152 10.8072 2.33754 10.4713 2.70693L9.42091 3.75781L9.0676 4.11128L9.42091 4.46475L11.5494 6.59425L11.895 6.93999L12.2485 6.6023L13.3577 5.54255Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </BuiButton>
              </BuiTableCell>
              <BuiTableCell>
                <BuiButton
                  color="icon"
                  classes="text-red-300 bg-red-300/[.08] hover:bg-red-300/[.16] focus:bg-red-300/[.3] p-4 inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.53234 11.084V11.0839V11.084ZM14.2541 5.17325H14.254H13.7567H13.3405L13.265 5.58256L11.694 14.0997C11.6715 14.2139 11.6098 14.3165 11.5197 14.3896C11.4292 14.463 11.3159 14.502 11.1998 14.4999L11.1998 14.4998H11.1906H4.90471V14.4998L4.89561 14.4999C4.77945 14.502 4.66615 14.463 4.57566 14.3896C4.4857 14.3166 4.42399 14.2142 4.40146 14.1001L2.84047 5.5338L2.76569 5.12343H2.34857H1.82143H1.79226L1.7633 5.12682C1.73035 5.13068 1.69695 5.12751 1.66528 5.11751C1.63362 5.1075 1.60436 5.09088 1.57945 5.06867C1.55454 5.04646 1.53454 5.01916 1.52082 4.98854C1.50711 4.95791 1.5 4.92469 1.5 4.89106C1.5 4.85742 1.50711 4.8242 1.52082 4.79358C1.53454 4.76295 1.55454 4.73566 1.57945 4.71345C1.60436 4.69124 1.63362 4.67461 1.66528 4.66461C1.69695 4.6546 1.73035 4.65143 1.7633 4.65529L1.79226 4.65868H1.82143H4.86493H5.33186L5.36376 4.19284C5.41182 3.49111 5.71291 2.83098 6.21068 2.33542C6.70121 1.84707 7.34976 1.55137 8.03847 1.50109C8.7287 1.54943 9.37929 1.84429 9.87157 2.33284C10.3711 2.82858 10.6734 3.48982 10.7217 4.19293L10.7536 4.65868H11.2205H14.2043H14.2247L14.245 4.65703C14.2771 4.6544 14.3095 4.65844 14.3401 4.66891C14.3706 4.67937 14.3988 4.69606 14.4228 4.71797C14.4467 4.73988 14.466 4.76656 14.4793 4.79637C14.4924 4.82562 14.4994 4.85725 14.5 4.88934V4.93166C14.4985 4.99609 14.4721 5.05727 14.4265 5.10231C14.3804 5.14787 14.3185 5.17326 14.2541 5.17325ZM12.7266 5.78429L12.8362 5.19318H12.235H3.87032H3.26915L3.37869 5.78429L4.82088 13.5664L4.89665 13.9753H5.3125H10.7928H11.2087L11.2844 13.5664L12.7266 5.78429ZM5.86904 4.11135L5.81699 4.65868H6.36679H9.73852H10.2892L10.2362 4.11056C10.1828 3.55829 9.93863 3.04186 9.54563 2.65044C9.1526 2.25899 8.63536 2.01714 8.08311 1.96681L8.03368 1.96231L7.98434 1.96761C7.43886 2.0262 6.93048 2.2717 6.5451 2.66238C6.15974 3.05305 5.921 3.56491 5.86904 4.11135Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </BuiButton>
              </BuiTableCell>
            </BuiTableRow>
          </BuiTableBody>
          <BuiTableFooter>
            <BuiTableRow>
              <BuiTableCell
                colspan="2"
                class="!text-left text-base font-semibold text-clay-500/[.32]"
              >
                Numbers of nodes required:
              </BuiTableCell>
              <BuiTableCell
                class="border-r border-primary-500/[0.16] text-clay-500/[.32] font-semibold"
              >
                1 / >
              </BuiTableCell>
              <BuiTableCell
                class="border-r border-primary-500/[0.16] whitespace-nowrap text-red-300 font-semibold bg-red-100"
              >
                1 / 3 / 5
              </BuiTableCell>
              <BuiTableCell
                class="border-r border-primary-500/[0.16] text-clay-500/[.32] bg-green-100 text-green-500 font-semibold"
              >
                1 / >
              </BuiTableCell>
              <BuiTableCell
                class="border-r border-primary-500/[0.16] text-clay-500/[.32] font-semibold"
              >
                1 / >
              </BuiTableCell>
              <BuiTableCell class="border-primary-500/[0.16] text-clay-500/[.32]"></BuiTableCell>
              <BuiTableCell class="border-primary-500/[0.16] text-clay-500/[.32]"></BuiTableCell>
              <BuiTableCell class="border-primary-500/[0.16] text-clay-500/[.32]"></BuiTableCell>
            </BuiTableRow>
          </BuiTableFooter>
        </BuiTable>
      </div>
    </Variant>
  </Story>
</template>
